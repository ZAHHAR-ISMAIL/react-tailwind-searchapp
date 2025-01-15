"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/property";
import useFilteredItems from "@/hooks/useFilteredItems";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]); // State for properties
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  const filteredProperties = useFilteredItems(properties, searchQuery); // Filtered results

  // Load properties data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("data/properties.json");
        if (!response.ok) {
          console.log(response.statusText);
          throw new Error("Failed to load properties");
        }
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-8 md:mx-24">
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearch={(query: string) => {
              setSearchQuery(query);
            }}
          />
        </div>
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-8">
            <p className="text-xl text-gray-600">
              No properties found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import { useMemo } from "react";
import { Property } from "../types/property";

/**
 * Custom hook to filter items based on a search query
 * @param {Property[]} items - The list of properties to filter
 * @param {string} query - The search query
 * @returns {Property[]} - The filtered properties
 */
const useFilteredItems = (items: Property[], query: string): Property[] => {
  return useMemo(() => {
    if (!query) return items; // If no query, return all items

    const lowerCaseQuery = query.toLowerCase();
    return items.filter(({ name, description }) =>
      [name, description].join(" ").toLowerCase().includes(lowerCaseQuery)
    );
  }, [items, query]);
};

export default useFilteredItems;

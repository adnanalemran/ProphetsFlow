import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a prophet's banglaName to URL-friendly format
 * Removes spaces before parentheses: "আদম (আঃ)" -> "আদম(আঃ)"
 */
export function getProphetUrlName(banglaName: string): string {
  return banglaName.replace(/\s+\(/g, '(');
}

/**
 * Normalizes a prophet name for lookup
 * Handles both "আদম (আঃ)" and "আদম(আঃ)" formats
 */
export function normalizeProphetName(name: string): string {
  // Remove spaces before parentheses and trim
  return name.replace(/\s+\(/g, '(').trim();
}


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

/**
 * Like functionality for prophets
 */
const LIKES_STORAGE_KEY = 'prophet_likes';

export function getProphetLikes(prophetId: string): number {
  if (typeof window === 'undefined') return 0;
  try {
    const likes = JSON.parse(localStorage.getItem(LIKES_STORAGE_KEY) || '{}');
    return likes[prophetId] || 0;
  } catch {
    return 0;
  }
}

export function isProphetLiked(prophetId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const liked = JSON.parse(localStorage.getItem('prophet_liked_status') || '{}');
    return liked[prophetId] || false;
  } catch {
    return false;
  }
}

export function toggleProphetLike(prophetId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const liked = JSON.parse(localStorage.getItem('prophet_liked_status') || '{}');
    const likes = JSON.parse(localStorage.getItem(LIKES_STORAGE_KEY) || '{}');
    
    const isLiked = liked[prophetId] || false;
    
    if (isLiked) {
      // Unlike
      liked[prophetId] = false;
      likes[prophetId] = Math.max(0, (likes[prophetId] || 0) - 1);
    } else {
      // Like
      liked[prophetId] = true;
      likes[prophetId] = (likes[prophetId] || 0) + 1;
    }
    
    localStorage.setItem('prophet_liked_status', JSON.stringify(liked));
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(likes));
    
    return !isLiked;
  } catch {
    return false;
  }
}

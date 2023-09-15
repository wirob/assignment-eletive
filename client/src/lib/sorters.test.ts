import { describe, expect, it } from 'vitest'
import { sortHighestRating, sortLowestRating } from './sorters'

describe('sorters', () => {
  const testArray = [
    {
      name: 'Workload',
      score: 1.0,
      previousScore: 1.0,
      icon: 'checkMark',
      benchMark: {
        name: 'Media & Telecommunication',
        score: 1.0,
      },
    },
    {
      name: 'Meaningfulness and Participation',
      score: 3.0,
      previousScore: 3.0,
      icon: 'trophy',
      benchMark: {
        name: 'Media & Telecommunication',
        score: 3.0,
      },
    },
    {
      name: 'Relationship with Colleagues',
      score: 2.0,
      previousScore: 2.0,
      icon: 'people',
      benchMark: {
        name: 'Media & Telecommunication',
        score: 2.0,
      },
    },
  ]

  describe('sortHighestRating', () => {
    it('returns a sorted array based on highest rating', () => {
      const expected = sortHighestRating(testArray)

      expect(expected).toEqual([
        {
          name: 'Meaningfulness and Participation',
          score: 3.0,
          previousScore: 3.0,
          icon: 'trophy',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 3.0,
          },
        },
        {
          name: 'Relationship with Colleagues',
          score: 2.0,
          previousScore: 2.0,
          icon: 'people',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 2.0,
          },
        },

        {
          name: 'Workload',
          score: 1.0,
          previousScore: 1.0,
          icon: 'checkMark',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 1.0,
          },
        },
      ])
    })
  })

  describe('sortLowestRating', () => {
    it('returns a sorted array based on lowest rating', () => {
      const expected = sortLowestRating(testArray)

      expect(expected).toEqual([
        {
          name: 'Workload',
          score: 1.0,
          previousScore: 1.0,
          icon: 'checkMark',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 1.0,
          },
        },
        {
          name: 'Relationship with Colleagues',
          score: 2.0,
          previousScore: 2.0,
          icon: 'people',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 2.0,
          },
        },
        {
          name: 'Meaningfulness and Participation',
          score: 3.0,
          previousScore: 3.0,
          icon: 'trophy',
          benchMark: {
            name: 'Media & Telecommunication',
            score: 3.0,
          },
        },
      ])
    })
  })
})

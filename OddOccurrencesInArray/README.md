# Odd Occurrences In Array

Codility: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

## Background

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:
´´´
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9

        the elements at indexes 0 and 2 have value 9,
        the elements at indexes 1 and 3 have value 3,
        the elements at indexes 4 and 6 have value 9,
        the element at index 5 has value 7 and is unpaired.
´´´

## Goal

Write a function:

    class Solution { public int solution(int[] A); }

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:
´´´
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
´´´
the function should return 7, as explained in the example above.

## Assumptions

Write an efficient algorithm for the following assumptions:

* N is an odd integer within the range [1..1,000,000];
* each element of array A is an integer within the range [1..1,000,000,000];
* all but one of the values in A occur an even number of times.

## Design

As the elements of the array are smaller than the maximum integer we can use exclusive or:

```
A xor A cancels itself and B xor 0 is B. Therefore A xor A xor B xor C xor C is B.
```

Otherwise we could use a Set. Including in the set elements not yet included and removing those already included. At the end only the elements with odd apperances would rest.


---
---

Programming prime numbers is often the first challenge for beginners.

Definition (Prime number):
An integer n > 1 is prime iff it is not divisible by any integer i such that 2 <= i <= n - 1.

Here's a simple C program to print the primes less than 100:

prime.c

    #include <stdio.h>
    
    /**
     * Determines if an integer is prime.
     */
    int is_prime(const int n) {
        int i;
    
        /* Integers less than or equal to 1 are not prime. */
        if (n <= 1) {
            return 0;
        }
    
        /* Performs trial division by every integer `i` such that 2 <= `i` <= `n` - 1. */
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                return 0;
            }
        }
    
        return 1;
    }
    
    int main(void) {
        int i;
    
        /* Prints the primes less than 100. */
        for (i = 2; i < 100; i++) {
            if (is_prime(i)) {
                printf("%d\n", i);
            }
        }
    
        return 0;
    }


    $ gcc -Wall -Wextra -o prime prime.c
    $ ./prime
    2
    3
    ...
    97

This program determines if a number is prime by dividing it by smaller numbers, as is the definition.  Such an algorithm is called trial division.

One of the most curious is, actually, whether a number is prime, and if not, what its prime factors are.  That's called prime factorization.  We will discuss it later and focus on a primality test and generation of primes now.

We can improve our program using arithmetic.

Definition (Divisibility):
Let n, d, and k be integers.  We say that n is divisible by d iff there exists k such that n = kd.

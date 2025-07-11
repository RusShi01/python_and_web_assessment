# palindrome_checker.py

word = input("Enter a word: ")
reversed_word = word[::-1]

print("Reversed word:", reversed_word)

if word == reversed_word:
    print("This is a palindrome!")
else:
    print("This is not a palindrome.")

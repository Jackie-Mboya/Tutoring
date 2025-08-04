fruits = ["apple", "mango", "passion", "banana", "cherries"]

# Start from the last index
index = len(fruits) - 1

# Use a while loop to iterate in reverse
while index >= 0:
    print(fruits[index])
    index -= 1

 #sort
fruits = ["apple", "mango", "passion", "banana", "cherries"]
fruits.sort()
print("Sorted alphabetically:", fruits)   
 # sort in reverse
fruits = ["apple", "mango", "passion", "banana", "cherries"]
fruits.sort(reverse=True)
print("Sorted in reverse:", fruits)
#copy lists
fruits = ["apple", "mango", "passion", "banana", "cherries"]
fruits_copy = fruits.copy()
print("Copied list:", fruits_copy)
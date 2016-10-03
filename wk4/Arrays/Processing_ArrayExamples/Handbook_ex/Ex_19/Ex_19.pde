String[] trees = { "lychee", "coconut", "fig"}; 

printArray(trees.length);
trees = shorten(trees);  // Remove the last element from the array 
printArray(trees);  // Prints [0] "lychee", [1] "coconut"
printArray(trees.length);
println();

trees = shorten(trees);  // Remove the last element from the array 
printArray(trees);  // Prints [0] "lychee"
# Recursion-Tree-Extractor-Visualizer

This a two part tool to extract and visualise a recursion code. The two parts are 
    1.Extractor (RecursionTreeExtractor.java)
    2.Visualiser (main.html , main.css , main.js)

The tree extractor is meant to be used in your recursive code as an imported class.

How To Use  
The first tool of the set is used as you would use any other library class i.e. by importing it first. You will need a recursion code whose tree you want to extract. For this example we will be using a recursive code for fibonacci series. Once you have your code you need to make these changes.  

  -> Import RecursionTreeExtractor and create and store an Object of this type in a global scope where our recursive function can access it .

  -> In your recursive function at the very start invoke the addNewCall() method of RecursionTreeExtractor object with arguments that you want to use to define this method call (example- arguments , string version of arrays etc.) .

  -> At every return surround the return value with addNewReturn() method of RecursionTreeExtractor object.

  -> At the end of the recursive process invoke the createJSON() method on the RecursionTreeExtractor object.


Refer to https://github.com/Manas-Ranjan-Das/Recursion-Tree-Extractor-Visualizer/blob/main/Extraction%20steps.png 

The end result is a .JSON file representing a recursion tree

Note : The output can also be visualised using my JSON visualiser at manas-ranjan-das.github.io/json-visualiser
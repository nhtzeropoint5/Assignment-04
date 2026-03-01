## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementByID only chooses the element with specified id
### getElementsByClassName chooses elements with specified class and makes a live HTML collection containing it and returns
### querySelector chooses the first child of whatever css selector is specified inside it's brackets
### querySelectorAll chooses all childs of whatever css selector is specified inside it's brackets and returns nodeList


### 2. How do you create and insert a new element into the DOM?
### const variableName = document.createElement('element_name');
### const parent = document.getElementByID('parentID');
### parent.appendChild(variableName);

### 3. What is Event Bubbling? And how does it work?
### event bubbling means selecting a certain node will also select it's parent node
### the event will keep propagating to it's parents
### the event will start from a target element and propagate to it's parent
###
### 4. What is Event Delegation in JavaScript? Why is it useful?
### instead of attaching event listener to a child element we attach it to the parent
### so that when the document loads the eventListener is loaded into the parent once
### and new childrens also inherit the eventListener behaviour from parent
### it is useful because we dont have to hardcode it to every child
### also if we code it into the child it might not inherit eventListener behavior if new child nodes are created
### so we use it so that all children inherit that
###
###
### 5. What is the difference between preventDefault() and stopPropagation() methods?
### preventDefault() stops the browsers default behavior
###
### stopPropagation() stops propagating event bubbling to it's parent further
###
###
###
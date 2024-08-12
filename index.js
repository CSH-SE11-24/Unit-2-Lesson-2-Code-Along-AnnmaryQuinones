// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("Whats the day of the week?")
user = user.toLowerCase

if (user === "saturday" || user === "sunday"){
  console.log("Its the weekend, yayy!!!")
}else{
  console.log("Its a week day, yay school!!!!")
}




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("What is your age")
age = parseInt(age)

if(age < 0){
  console.log("Thats not an age")
} else if (age <= 12){
  console.log("You are a child!")
}else if(age <= 18){
  console.log("Your a teen")
}else{
  console.log("RIP you lived a good life")
}

// WHILE LOOPS
// Print 1 to 5
let i = 1

while(i <= 5){
  console.log(i)
  i++
}


// Print from a certain number to 1
let user = prompt("Enter a number")
user = parseInt(user)
while (user > 0){
  console.log(user)
  user--
}



// Summing up to 5
let sum = 0
let counter = 0
while (counter <= 5){
  sum = counter + sum
  counter++
}
console.log("sum of 1-5", sum)


// Using prompt
let mysteryStudent = "zyaire"
let user2 = prompt("Enter a students name")

while(mysteryStudent !== user2.toLowerCase()){
  user2 = prompt("Try again, guess a different student.")
}
console.log("Good job!")




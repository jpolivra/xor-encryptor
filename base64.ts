// Base64 encode and decode
// Explanation

// How to encode "Hello" word into base64
// The first step is to convert the word to binary
// "Hello" binary:
// 01001000 01100101 01101100 01101100 01101111

// Now we've to convert each eight bits binary to a six bits binary
// That's because into Base64 can only be made into six bits binary
// To make it is very easy, basicly we're gonna cut the whole
// Binary sentence in to six digits, so it will be like it:
// 010010 000110 010101 101100 011011 000110 1111

// As you can se, now we have a 4 bits binary, so we can just add
// At the end to finish the six bits convertion
// 010010 000110 010101 101100 011011 000110 1111=
// (Probably the = signal will be replaced by 00 into the covertion)

// After this, the next step is to convert binary to decimal
// (Check decimal.ts file to learn how to make it)

// 18 6 21 44 27 6 60

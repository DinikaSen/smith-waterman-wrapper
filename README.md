# smith-waterman-wrapper
A simple node module that wraps the functionalities of a smith-waterman implementation written in C

The original program written in C is found here. [https://github.com/noporpoise/seq-align](https://github.com/noporpoise/seq-align)

## Install

You can install smith-waterman-wrapper by running,

```bash
npm install smith-waterman-wrapper
```

## Usage
#### Align two unaligned sequences
* .alignPair( sequence1, sequence2, matchScore, misMatchScore, gapScore, callback )   
  callback passed (err, data)
              
  ```javascript
  const smithW = require('smith-waterman-wrapper');
  var sequence1 = 'AADBFGTRHYSRRFDERS';
  var sequence2 = 'AADGTDRSYSRFFDERTS';
  var matchScore = 1;
  var misMatchScore = -1;
  var gapScore = -1;
  
  smithW.alignPair(sequence1,sequence2,matchScore,misMatchScore,gapScore,function(err,data){
      if(err){
          console.log(err);
      }else{
          console.log(data);
      }
  });
      

#### Align 2 sequences and output alignment along with score matrix 
* .alignPairGetMatrix (sequence1, sequence2, matchScore, misMatchScore, gapScore, callback)
  callback passed (err, data)
  
#### Align sequence file (Read 2 sequences at a time and align them)
* .alignFile (inputFile, matchScore, misMatchScore, gapScore, callback)
  callback passed (err, data)
  
  ```javascript
    const smithW = require('smith-waterman-wrapper');
    var inputFile = 'samples/examples.fasta';  
    var matchScore = 1;
    var misMatchScore = -1;
    var gapScore = -1;
    
    smithW.alignFile(inputFile, matchScore, misMatchScore, gapScore, function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
  
  
#### Align sequence file and output pairwise alignment along with score matrix
* .alignFileGetMatrix (inputFile, matchScore, misMatchScore, gapScore, callback)
  callback passed (err, data)



**NOTE**: You can build the bundled binary executable by running,


```bash
node util/psaToolBuilder.js
```



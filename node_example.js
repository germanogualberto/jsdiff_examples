require('colors')
var Diff = require('diff')

function call(one,other,method,method_name){
  var diff = method(one, other);
  console.log("-----------------"+method_name+"--------------------")
  console.log(one)
  console.log("-")
  console.log(other)
  console.log(diff)
  if (method_name !== "diffArrays")
  diff.forEach(function(part){
    // green for additions, red for deletions
    // grey for common parts
    var color = part.added ? 'green' :
      part.removed ? 'red' : 'grey';
    process.stderr.write(part.value[color]);
  });
  console.log("\n----------end of "+method_name+"-------------------");

}

var one = 'beep boop';
var other = 'beep boob blah';
call(one,other,Diff.diffChars,"diffChars")
call(one,other,Diff.diffWords,"diffWords")
call(one,other,Diff.diffWordsWithSpace,"diffWordsWithSpace")

one = "Alma minha gentil, que te partiste\ntão cedo desta vida descontente,\nrepousa lá no Céu eternamente,\ne viva eu cá na terra sempre triste\n"
other = "Alma minha gentil, que não partistes\ntão tarde nesta vida contente,\nvoa lá no Céu até amanhã,\ne vivo eu cá na terra feliz\n voa andorinha\n"
call(one,other,Diff.diffLines,"diffLines")
call(one,other,Diff.diffTrimmedLines,"diffTrimmedLines")
call(one,other,Diff.diffSentences,"diffSentences")
one="body { background-color: lightblue; }"
other="body { background-color: blue; }"
call(one,other,Diff.diffCss,"diffCss")
one={"name":"John", "age":30, "car":null}
other={ "age":30,"name":"John", "car":"red"}
call(one,other,Diff.diffJson,"diffJson")
one=["Saab", "Volvo", "BMW"]
other=["Saab", "Volvo", "BMM"]
call(one,other,Diff.diffArrays,"diffArrays")

//Diff.createTwoFilesPatch
//Diff.createPatch
//Diff.structuredPatch
//Diff.applyPatch
//Diff.applyPatches
//Diff.parsePatch
//convertChangesToXML(changes)
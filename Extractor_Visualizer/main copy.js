// "strict"

// Stack implimentation
class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }
    
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

/* 
Solution 1 :
    Instead of creating a JSON file create a HTML tree on the go 

    Problem : 
        Live view might not be possible

Solution 2 :
    DON'T BE LAZY



*/
var text = document.getElementById("json-input")

var enter = document.getElementById("enter");
var str;
var recTree

 //'{"param":["5"],"next":[{"param":["4"],"next":[{"param":["3"],"next":[{"param":["2"],"next":[{"param":["1"],"next":[],"returns":"1"},{"param":["0"],"next":[],"returns":"0"}],"returns":"1"},{"param":["1"],"next":[],"returns":"1"}],"returns":"2"},{"param":["2"],"next":[{"param":["1"],"next":[],"returns":"1"},{"param":["0"],"next":[],"returns":"0"}],"returns":"1"}],"returns":"3"},{"param":["3"],"next":[{"param":["2"],"next":[{"param":["1"],"next":[],"returns":"1"},{"param":["0"],"next":[],"returns":"0"}],"returns":"1"},{"param":["1"],"next":[],"returns":"1"}],"returns":"2"}],"returns":"5"}';

console.log(recTree);
const call_template = document.getElementById("template-calls").cloneNode(true);
call_template.removeAttribute('id')
const blank_template = document.getElementById("template-blank").cloneNode(true);
blank_template.removeAttribute('id')

console.log(call_template);
console.log(blank_template);

var b = document.getElementById("Next") ;



//max depth of tree
var maxTreeDepth

function maxDepth (node  ){
    if(node.next.length===0){
        return 1;
    }
    max = 0;

    for (let index = 0; index < node.next.length; index++) {
        d = maxDepth (node.next[index] );
        if (max<d){
            max = d;
        }
    }
    console.log(max);
    return max+1;
}




//Filler 

function filler(call , depth) {
    blank = blank_template.cloneNode(true);
    call.appendChild(blank);
    if(depth>1){
        filler(blank , depth-1);
    }
}

//

enter.addEventListener("click",()=>{
    str = text.value.trim() ;
    recTree = JSON.parse(str);
    maxTreeDepth = maxDepth(recTree)+1;
    console.log(recTree);
});



// Traversal concept


st = new Stack() ;

st.push(()=>{
    traverser(recTree,1, document.getElementById("display-box"),maxTreeDepth );
});


b.addEventListener("click",()=>{
    var leftOver = st.pop()();

    
} );


function traverser(node , siblings , place ,depth ) {

    if(node == null){
        return ;
    }
    var paramStr = node.param ;
    var returnStr = node.returns ;
    var next = node.next;

    var call = call_template.cloneNode(true) ;

    call.firstElementChild.innerHTML="fun(" + paramStr +")" 
    call.style.width = 100/siblings-4+"%"

    place.appendChild(call);


    st.push(()=>{
        call.firstElementChild.innerHTML = call.firstElementChild.innerHTML +"<br> Rtns : "+returnStr;
    });


    for (let index = next.length-1; index >=0 ; index--) {

        st.push(()=>{
            traverser(next[index],next.length, call ,depth-1);
        });
    }

    if(next.length==0){
        filler(call , depth-1);
    }



}






















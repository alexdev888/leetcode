function ListNode(val) {
  this.val = val;
  this.next = null;
}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

let node4 = new ListNode(5);
let node5 = new ListNode(6);
let node6 = new ListNode(4);
let node7 = new ListNode(7);

node4.next = node5;
node5.next = node6;
node6.next = node7;

var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  else if (!l1) return l2;
  else if (!l2) return l1;

  var a = l1.val + l2.val;
  var p = new ListNode(a % 10);
  p.next = addTwoNumbers(l1.next, l2.next);
  if (a >= 10) p.next = addTwoNumbers(p.next, new ListNode(1));
  return p;
};

const result = addTwoNumbers(node1, node4);

console.log(JSON.stringify(result));

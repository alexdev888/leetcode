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

node4.next = node5;
node5.next = node6;

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let dummy = result;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
    dummy.val = sum;
    sum = carry;
    carry = 0;

    if (l1 || l2 || sum > 0) {
      dummy.next = new ListNode(0);
      dummy = dummy.next;
    }
  }
  return result;
};

const result = addTwoNumbers(node1, node4);
console.log(JSON.stringify(result));

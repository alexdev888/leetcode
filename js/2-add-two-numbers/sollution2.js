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
  let dummy_head = new ListNode(0);
  let p = dummy_head;
  let q = dummy_head;
  let carry = 0;

  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const _sum = x + y + carry;
    carry = Math.floor(_sum / 10);

    p.next = new ListNode(_sum % 10);
    p = p.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    p.next = new ListNode(carry);
  }

  const result = dummy_head.next;
  return result;
};

const result = addTwoNumbers(node1, node4);

console.log(JSON.stringify(result));

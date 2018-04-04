const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Node can be mirrored', () => {
    const node = new Node(10);
    node.insert(5);
    node.insert(15);
    node.insert(17);
    node.insert(22);
    node.insert(18);
    node.mirror();

    expect(node.left.data).toEqual(15);
    expect(node.right.data).toEqual(5);
    expect(node.left.left.data).toEqual(17);
    expect(node.left.left.left.data).toEqual(22);
    expect(node.left.left.left.right.data).toEqual(18);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});

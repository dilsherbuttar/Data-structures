describe('queue', function() {
	var queue;

	beforeEach( function(){
		queue = new Queue();
	})

	it('should have methods named "enqueue", "dequeue", "size"', function() {
			expect(queue.enqueue).to.be.a('function');
			expect(queue.dequeue).to.be.a('function');
			expect(queue.size).to.be.a('function');
 });

 it('reports a size of zero for a new queue', function() {
   expect(queue.size()).to.equal(0);
 });

 it('reports a size of 2 after adding two items', function() {
		 queue.enqueue('a');
		 queue.enqueue('b');
		 expect(queue.size()).to.equal(2);
	});

	it('reports a size of 1 after adding two items and removing one', function() {
   queue.enqueue('a');
   queue.enqueue('b');
   queue.dequeue();
   expect(queue.size()).to.equal(1);
 });

 it('reports a size of 0 after removing more items than were added', function() {
   queue.enqueue('a');
   queue.dequeue();
   queue.dequeue();
   expect(queue.size()).to.equal(0);
 });

 it('allows sequentially adding and removing items', function() {
   queue.enqueue('a');
   expect(queue.dequeue()).to.equal('a');
   queue.enqueue('b');
   expect(queue.dequeue()).to.equal('b');
 });

})
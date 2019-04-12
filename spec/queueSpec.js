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
})
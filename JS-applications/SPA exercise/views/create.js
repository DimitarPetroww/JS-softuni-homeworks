function create() {
    return `<h1>Create New Offer</h1>
    <p class="message"></p>
    <form>
        <div>
            <input type="text" placeholder="Name...">
        </div>
        <div>
            <input type="text" placeholder="Price...">
        </div>
        <div>
            <input type="text" placeholder="Image url...">
        </div>
        <div>
            <textarea placeholder="Give us some description about this offer..."></textarea>
        </div>
        <div>
            <input type="text" placeholder="Brand...">
        </div>
        <div>
            <button onclick="createShoe(event)">Create</button>
        </div>
    </form>`
}
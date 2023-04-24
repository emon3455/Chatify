
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chatify</span>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>        
        </div>
    );
};

export default Navbar;
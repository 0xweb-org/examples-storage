contract DumpDemo {
    struct User {
        uint8 id;
        uint256 value;
    }

    uint256 public _foo;
    string public _name;


    function setValues (uint256 foo, string memory name) external {
        _foo = foo;
        _name = name;
    }
}

// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity =0.5.16;

import '../AhojV1ERC20.sol';

contract ERC20 is AhojV1ERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}

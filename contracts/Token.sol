// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Aluxion is ERC20, AccessControl {
    constructor(address defaultAdmin) ERC20("Aluxion", "ALUXION") {
        _mint(msg.sender, 18000000 * 10 ** decimals());
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
    }
}

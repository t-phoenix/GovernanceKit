// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimelockFactory {
    event TimelockControllerCreated(address indexed admin, address indexed timelock);

    function createTimelockController(uint256 delay, address[] memory proposers, address[] memory executors) external returns (address) {
        TimelockController timelock = new TimelockController(delay, proposers, executors, msg.sender);
        // timelock.transferOwnership(msg.sender);

        emit TimelockControllerCreated(msg.sender, address(timelock));

        return address(timelock);
    }
}

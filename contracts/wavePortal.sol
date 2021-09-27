// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract wavePortal {
    uint256 waveCount;

    constructor() {
        console.log("Contract constructor runs first");
    }

    function wave() public {
        waveCount += 1;
        console.log("%s waved at me", msg.sender);
    }

    function getTotalWaveCount() public view returns (uint256) {
        console.log("%d peoples have waved at me", waveCount);
        return waveCount;
    }
}
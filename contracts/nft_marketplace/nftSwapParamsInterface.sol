pragma solidity ^0.6.7;


/// @dev Interface of the nftSwapParams

interface NftSwapParamsInterface {

    /// @dev Returns true if signature is valid
    function isValidParams(uint256 _offerId, bytes calldata _encodedParams) external returns (bool);

}

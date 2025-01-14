/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ISwapRouterContract
  extends Truffle.Contract<ISwapRouterInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ISwapRouterInstance>;
}

type AllEvents = never;

export interface ISwapRouterInstance extends Truffle.ContractInstance {
  /**
   * In the implementation you must pay the pool tokens owed for the swap. The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory. amount0Delta and amount1Delta can both be 0 if no tokens were swapped.
   * Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.
   * @param amount0Delta The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
   * @param amount1Delta The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.
   * @param data Any data passed through by the caller via the IUniswapV3PoolActions#swap call
   */
  uniswapV3SwapCallback: {
    (
      amount0Delta: number | BN | string,
      amount1Delta: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      amount0Delta: number | BN | string,
      amount1Delta: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      amount0Delta: number | BN | string,
      amount1Delta: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      amount0Delta: number | BN | string,
      amount1Delta: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exactInputSingle: {
    (
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exactInput: {
    (
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountIn: number | BN | string;
        amountOutMinimum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exactOutputSingle: {
    (
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        tokenIn: string;
        tokenOut: string;
        fee: number | BN | string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
        sqrtPriceLimitX96: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  exactOutput: {
    (
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      params: {
        path: string;
        recipient: string;
        deadline: number | BN | string;
        amountOut: number | BN | string;
        amountInMaximum: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    /**
     * In the implementation you must pay the pool tokens owed for the swap. The caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory. amount0Delta and amount1Delta can both be 0 if no tokens were swapped.
     * Called to `msg.sender` after executing a swap via IUniswapV3Pool#swap.
     * @param amount0Delta The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.
     * @param amount1Delta The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.
     * @param data Any data passed through by the caller via the IUniswapV3PoolActions#swap call
     */
    uniswapV3SwapCallback: {
      (
        amount0Delta: number | BN | string,
        amount1Delta: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        amount0Delta: number | BN | string,
        amount1Delta: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        amount0Delta: number | BN | string,
        amount1Delta: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        amount0Delta: number | BN | string,
        amount1Delta: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exactInputSingle: {
      (
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exactInput: {
      (
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountIn: number | BN | string;
          amountOutMinimum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exactOutputSingle: {
      (
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          tokenIn: string;
          tokenOut: string;
          fee: number | BN | string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
          sqrtPriceLimitX96: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    exactOutput: {
      (
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        params: {
          path: string;
          recipient: string;
          deadline: number | BN | string;
          amountOut: number | BN | string;
          amountInMaximum: number | BN | string;
        },
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}

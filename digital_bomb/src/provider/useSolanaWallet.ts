import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletEnvContext } from './solanaWalletProvider';



export const useSolanaWallet = () => {
    const wallet = useWallet();
    const env = useWalletEnvContext();

    return {
        ...wallet,
        ...env     
    };
};

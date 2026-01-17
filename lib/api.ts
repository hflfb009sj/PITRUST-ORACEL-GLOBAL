import { ADMIN_WALLET } from "./pi";

export const createEscrowTransaction = async (amount: number, sellerUsername: string) => {
  const fee = amount * 0.01; 
  const total = amount + fee;

  return {
    amount: total,
    memo: "Escrow for " + sellerUsername + " via PiTrust",
    metadata: {
      seller: sellerUsername,
      admin_fee: fee,
      admin_wallet: ADMIN_WALLET,
      timestamp: new Date().toISOString()
    }
  };
};
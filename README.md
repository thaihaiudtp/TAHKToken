# TAHK Token

TAHK Token là một token ERC-20 được xây dựng trên Ethereum blockchain sử dụng Hardhat và OpenZeppelin framework.

## 📋 Tổng quan

- **Tên Token**: TAHK Token
- **Symbol**: TAHK
- **Standard**: ERC-20
- **Decimals**: 18
- **Initial Supply**: 1,000,000 TAHK
- **Network**: Ethereum (mainnet/testnet)

## 🚀 Tính năng

- ✅ Token ERC-20 chuẩn
- ✅ Initial supply được mint cho deployer
- ✅ Sử dụng OpenZeppelin contracts (bảo mật cao)
- ✅ Hardhat framework cho development và testing
- ✅ TypeScript support
- ✅ Deploy script tự động

## 🛠️ Công nghệ sử dụng

- **Solidity**: ^0.8.20
- **Hardhat**: Framework phát triển smart contract
- **OpenZeppelin**: Thư viện smart contract bảo mật
- **TypeScript**: Type-safe development
- **Ethers.js**: Tương tác với Ethereum

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 16.0.0
- npm hoặc yarn
- Git

### Cài đặt dependencies

```bash
npm install
```

## ⚙️ Cấu hình

1. Tạo file `.env` trong thư mục root:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key_here
```

**⚠️ Lưu ý**: Không bao giờ commit file `.env` lên repository. File này đã được thêm vào `.gitignore`.

## 🏗️ Compile Smart Contract

```bash
npx hardhat compile
```

## 🧪 Testing

```bash
npx hardhat test
```

## 🚀 Deploy

### Deploy lên local network (Hardhat Network)

```bash
npx hardhat run scripts/deploy.ts
```

### Deploy lên Sepolia testnet

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Deploy lên mainnet

```bash
npx hardhat run scripts/deploy.ts --network mainnet
```

## 📄 Smart Contract

### TAHKToken.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TAHKToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("TAHK Token", "TAHK") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
```

### Tính năng chính:

- **Constructor**: Nhận initial supply và mint toàn bộ token cho deployer
- **ERC-20 Standard**: Kế thừa tất cả functions chuẩn ERC-20
- **Decimals**: Mặc định 18 decimals
- **Safe Math**: Sử dụng SafeMath từ OpenZeppelin

## 📊 Token Economics

- **Total Supply**: 1,000,000 TAHK
- **Initial Distribution**: 100% cho deployer
- **Mintable**: Không (fixed supply)
- **Burnable**: Không (trong version hiện tại)

## 🔧 Commands hữu ích

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to local network
npx hardhat run scripts/deploy.ts

# Deploy to testnet
npx hardhat run scripts/deploy.ts --network sepolia

# Verify contract on Etherscan
npx hardhat verify --network sepolia CONTRACT_ADDRESS "1000000000000000000000000"

# Start local node
npx hardhat node

# Check accounts
npx hardhat accounts

# Clean artifacts
npx hardhat clean
```

## 📁 Cấu trúc thư mục

```
tahk-token/
├── contracts/           # Smart contracts
│   ├── TAHKToken.sol   # Main token contract
│   └── Lock.sol        # Example contract
├── scripts/            # Deploy scripts
│   └── deploy.ts       # Main deploy script
├── test/              # Test files
├── artifacts/         # Compiled contracts
├── cache/             # Hardhat cache
├── typechain-types/   # TypeScript types
├── hardhat.config.ts  # Hardhat configuration
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── README.md          # This file
```

## 🔐 Bảo mật

- ✅ Sử dụng OpenZeppelin contracts (đã được audit)
- ✅ Solidity version cố định
- ✅ No complex logic (giảm thiểu rủi ro)
- ⚠️ Cần audit trước khi deploy mainnet

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Author**: thaiha
- **Email**: [Your Email]
- **GitHub**: [Your GitHub]

## 📝 License

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🗂️ Changelog

### Version 1.0.0
- ✅ Initial release
- ✅ Basic ERC-20 implementation
- ✅ Deploy scripts
- ✅ Hardhat configuration

---

**⚠️ Disclaimer**: Đây là một smart contract experimental. Vui lòng thực hiện audit kỹ lưỡng trước khi sử dụng trong production.
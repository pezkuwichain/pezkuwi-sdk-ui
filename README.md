<div align="center">
  <img src="docs/images/Pezkuwi_Logo_Horizontal_Pink_Black.png" alt="Pezkuwi SDK UI" width="400" />
  <br />
  <h1>Pezkuwi SDK UI</h1>
  
  <p>
    <strong>A comprehensive web interface for interacting with the Pezkuwi blockchain network.</strong>
  </p>

  [![CI](https://github.com/pezkuwichain/pezkuwi-sdk-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/pezkuwichain/pezkuwi-sdk-ui/actions/workflows/ci.yml)
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
</div>

## Features

- **Blockchain Explorer** - Browse blocks, transactions, and chain state
- **Wallet Management** - Create and manage accounts securely
- **Staking Interface** - Stake tokens and manage validators
- **Governance** - Participate in on-chain governance and voting
- **Developer Tools** - Extrinsics, RPC calls, and chain state queries
- **Analytics** - View network statistics and metrics

## Quick Start

### Prerequisites

- Node.js >= 18.14
- Yarn >= 4.0

### Installation

```bash
# Clone the repository
git clone https://github.com/pezkuwichain/pezkuwi-sdk-ui.git
cd pezkuwi-sdk-ui

# Install dependencies
yarn install

# Start development server
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build web version
yarn build:www

# Build desktop application (Electron)
yarn build:release:electron
```

## Hosted Version

Access the production version at **[https://pezkuwichain.app/sdk](https://pezkuwichain.app/sdk)**

## Project Structure

```
pezkuwi-sdk-ui/
├── packages/
│   ├── apps/              # Main application entry point
│   ├── apps-config/       # Chain configurations and endpoints
│   ├── apps-electron/     # Desktop application (Electron)
│   ├── apps-routing/      # Application routing
│   ├── page-*/            # Individual page components
│   ├── react-api/         # React API hooks and context
│   ├── react-components/  # Reusable UI components
│   ├── react-hooks/       # Custom React hooks
│   ├── react-params/      # Parameter handling components
│   ├── react-query/       # Query components
│   └── react-signer/      # Transaction signing components
├── scripts/               # Build and utility scripts
└── docs/                  # Documentation
```

## Configuration

### Network Endpoints

Configure network endpoints in `packages/apps-config/src/endpoints/production.ts`:

```typescript
{
  info: 'pezkuwi',
  providers: {
    Pezkuwi: 'wss://pezkuwichain.app:9944'
  }
}
```

### Custom Chain Types

Add custom runtime types in `packages/apps-config/src/api/spec/pezkuwi.ts`

## Branding

<div align="center">
  <img src="docs/images/PEZ_Token_Logo_512.png" alt="PEZ Token" width="128" />
  <p><em>PEZ Token Logo</em></p>
</div>

### Kurdistan Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Kesk (Green) | `#00A94F` | Primary actions, highlights |
| Sor (Red) | `#EE2A35` | Alerts, important actions |
| Zer (Gold) | `#FFD700` | Secondary accents |
| Spi (White) | `#FFFFFF` | Backgrounds |

## Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server on port 3000 |
| `yarn build` | Build for production |
| `yarn build:www` | Build web version |
| `yarn build:electron` | Build desktop application |
| `yarn lint` | Run ESLint |
| `yarn test` | Run test suite |

## Security

This application handles sensitive blockchain interactions. Please:

- Verify you're on the correct URL before signing transactions
- Keep private keys secure and never share them
- Use hardware wallets for significant amounts
- Report security issues to: security@pezkuwichain.app

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Apache-2.0

## Links

- **Website:** [https://pezkuwichain.app](https://pezkuwichain.app)
- **Documentation:** [https://docs.pezkuwichain.app](https://docs.pezkuwichain.app)
- **Issues:** [GitHub Issues](https://github.com/pezkuwichain/pezkuwi-sdk-ui/issues)

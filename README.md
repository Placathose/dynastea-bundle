# Dynastea Bundle - Shopify Bundle App

A powerful Shopify app that enables merchants to create and manage product bundles, offering customers attractive package deals while maintaining inventory control and sales tracking.

## 🎯 Project Overview

Dynastea Bundle allows Shopify store owners to:
- Create custom product bundles with multiple items
- Set original and discounted prices for bundles
- Manage bundle inventory and availability
- Track bundle performance and sales
- Seamlessly integrate bundles into their storefront

## 🚀 Current Status

### Completed
- ✅ Project initialization with Remix
- ✅ Database schema design with Prisma
- ✅ Basic project structure setup
- ✅ Initial dependencies installation

### In Progress
- 🔄 Setting up Supabase database integration
- 🔄 Shopify app configuration in Partner Dashboard

## 🛠 Tech Stack

- **Frontend & Backend**: [Remix](https://remix.run/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM**: [Prisma](https://www.prisma.io/)
- **UI Framework**: [Shopify Polaris](https://polaris.shopify.com/)
- **Authentication**: Shopify OAuth
- **Hosting**: [Fly.io](https://fly.io/)

## 📋 Database Schema

The app uses the following data models:

### Shop
- Store shop information and authentication details
- Tracks installed shops and their access tokens

### Bundle
- Manages bundle configurations
- Stores bundle details (title, description, prices)
- Tracks bundle status and availability

### BundleProduct
- Links products to bundles
- Manages product quantities within bundles
- Tracks bundle-product relationships

## 🎯 Upcoming Milestones

### Phase 1: Project Setup & Infrastructure
- [ ] Set up Supabase project and database
- [ ] Configure Shopify app in Partner Dashboard
- [ ] Set up development environment
- [ ] Configure authentication middleware

### Phase 2: Core Authentication & App Structure
- [ ] Implement Shopify OAuth flow
- [ ] Create session management
- [ ] Set up app navigation and UI components
- [ ] Implement app bridge for embedded app

### Phase 3: Bundle Management Features
- [ ] Create bundle management interface
- [ ] Implement product selection
- [ ] Add bundle creation/editing functionality
- [ ] Develop bundle listing and management

### Phase 4: Storefront Integration
- [ ] Create theme app extension
- [ ] Implement bundle display components
- [ ] Add cart integration
- [ ] Set up inventory management

### Phase 5: Admin Features
- [ ] Add analytics and reporting
- [ ] Create settings and configuration pages
- [ ] Implement bundle performance tracking
- [ ] Add theme customization options

### Phase 6: Testing & Deployment
- [ ] Write unit and integration tests
- [ ] Set up Fly.io deployment
- [ ] Configure production environment
- [ ] Implement monitoring

### Phase 7: App Store Preparation
- [ ] Create user documentation
- [ ] Prepare app store listing
- [ ] Write privacy policy and terms of service
- [ ] Create marketing materials

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Shopify Partner account
- Supabase account
- Shopify CLI

### Environment Setup
1. Clone the repository
2. Create a `.env` file with the following variables:
   ```env
   # Database
   DATABASE_URL="your-supabase-connection-string"

   # Shopify App
   SHOPIFY_API_KEY="your-api-key"
   SHOPIFY_API_SECRET="your-api-secret"
   SHOPIFY_APP_URL="http://localhost:3000"
   SHOPIFY_AUTH_CALLBACK_URL="http://localhost:3000/auth/callback"
   SHOPIFY_APP_SCOPES="write_products,read_products,write_script_tags,read_script_tags"

   # Session
   SESSION_SECRET="your-session-secret"
   ```

### Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🙏 Acknowledgments

- Shopify for their excellent documentation and tools
- Remix team for the amazing framework
- Supabase for the database infrastructure
- All contributors and supporters of the project

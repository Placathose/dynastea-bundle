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

## ⏱️ Development Timesheet (2-Week Sprint)

Estimated hours for a junior developer with 3 years of MERN/Next.js experience, new to Shopify development. Based on 8-hour workdays, 10 working days (80 hours total).

### Week 1 (40 hours)

#### Day 1-2: Project Setup & Authentication (16 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| Supabase Setup | 2 | High | Quick setup, basic connection |
| Shopify Partner Dashboard | 2 | High | App creation, API keys |
| Development Environment | 2 | High | Local setup, env variables |
| Shopify OAuth Flow | 6 | High | Basic auth implementation |
| Session Management | 4 | High | Essential security setup |
| **Day 1-2 Total** | **16** | | |

#### Day 3-4: Core Features (16 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| App Navigation | 4 | High | Basic Polaris setup |
| Bundle Management UI | 6 | High | CRUD operations |
| Product Selection | 6 | High | Basic product search/select |
| **Day 3-4 Total** | **16** | | |

#### Day 5: Storefront Integration (8 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| Basic Theme Extension | 4 | High | Minimal required setup |
| Bundle Display | 4 | High | Basic bundle display |
| **Day 5 Total** | **8** | | |

### Week 2 (40 hours)

#### Day 6-7: Bundle Features (16 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| Bundle Creation | 6 | High | Core bundle functionality |
| Bundle Editing | 4 | High | Basic edit operations |
| Bundle Listing | 6 | High | List view with sorting |
| **Day 6-7 Total** | **16** | | |

#### Day 8-9: Cart & Inventory (16 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| Cart Integration | 8 | High | Basic cart functionality |
| Inventory Management | 4 | Medium | Basic stock tracking |
| Testing & Bug Fixes | 4 | High | Critical issues only |
| **Day 8-9 Total** | **16** | | |

#### Day 10: Deployment & Polish (8 hours)
| Task | Hours | Priority | Notes |
|------|-------|----------|-------|
| Fly.io Deployment | 4 | High | Basic deployment |
| Documentation | 2 | Medium | Essential docs only |
| Final Testing | 2 | High | Critical paths only |
| **Day 10 Total** | **8** | | |

### Total Hours Breakdown
- **Core Features (High Priority)**: 60 hours
- **Additional Features (Medium Priority)**: 12 hours
- **Buffer/Testing**: 8 hours
- **Total**: 80 hours

### Notes on 2-Week Timeline
1. **Priority Focus**:
   - Focus on MVP (Minimum Viable Product) features only
   - Defer non-essential features to future updates
   - Use Shopify's pre-built components where possible

2. **Time Optimization**:
   - Use Shopify CLI for faster development
   - Leverage Polaris components extensively
   - Minimize custom styling
   - Use existing Shopify patterns

3. **Deferred Features** (for future updates):
   - Advanced analytics
   - Complex theme customization
   - Detailed reporting
   - Marketing materials
   - App store optimization

4. **Critical Path**:
   - Authentication
   - Bundle creation/management
   - Basic cart integration
   - Essential storefront display

5. **Risk Mitigation**:
   - Start with Shopify's example apps
   - Use proven patterns
   - Focus on core functionality first
   - Test critical paths early

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

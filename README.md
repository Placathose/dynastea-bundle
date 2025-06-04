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
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| Supabase Setup | 2 | High | • Create new Supabase project<br>• Set up PostgreSQL database<br>• Configure database connection string<br>• Create initial tables via Prisma<br>• Set up database migrations<br>• Test database connection<br>• Configure database security rules |
| Shopify Partner Dashboard | 2 | High | • Create new app in Partner Dashboard<br>• Configure app URLs (development/production)<br>• Set up app scopes (products, script_tags)<br>• Generate API credentials<br>• Configure app proxy settings<br>• Set up app extensions<br>• Configure app embed settings |
| Development Environment | 2 | High | • Install Shopify CLI<br>• Set up environment variables<br>• Configure development store<br>• Set up ngrok for local development<br>• Configure CORS settings<br>• Set up development database<br>• Configure local SSL certificates |
| Shopify OAuth Flow | 6 | High | • Implement OAuth callback route<br>• Create session middleware<br>• Set up shop authentication<br>• Implement access token storage<br>• Create shop installation flow<br>• Handle app uninstallation<br>• Implement token refresh logic<br>• Set up error handling for auth failures |
| Session Management | 4 | High | • Implement session storage<br>• Create session validation<br>• Set up secure cookie handling<br>• Implement session timeout<br>• Create session recovery flow<br>• Set up session encryption<br>• Implement logout functionality |

#### Day 3-4: Core Features (16 hours)
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| App Navigation | 4 | High | • Set up Polaris navigation<br>• Create app layout component<br>• Implement route structure<br>• Create navigation state management<br>• Set up breadcrumb navigation<br>• Implement mobile navigation<br>• Create navigation loading states |
| Bundle Management UI | 6 | High | • Create bundle list component<br>• Implement bundle creation form<br>• Build bundle edit interface<br>• Create bundle deletion flow<br>• Implement bundle status toggle<br>• Create bundle search/filter<br>• Build bundle sorting functionality<br>• Implement pagination for bundles |
| Product Selection | 6 | High | • Create product search component<br>• Implement product selection modal<br>• Build product quantity selector<br>• Create product variant handling<br>• Implement product image display<br>• Build product price display<br>• Create product inventory check<br>• Implement product selection validation |

#### Day 5: Storefront Integration (8 hours)
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| Basic Theme Extension | 4 | High | • Create app block template<br>• Set up theme app extension<br>• Implement bundle display block<br>• Create bundle CSS styles<br>• Set up theme settings<br>• Implement responsive design<br>• Create theme app embed |
| Bundle Display | 4 | High | • Create bundle product component<br>• Implement bundle price display<br>• Build bundle image handling<br>• Create bundle description display<br>• Implement bundle availability check<br>• Build bundle add to cart button<br>• Create bundle loading states |

### Week 2 (40 hours)

#### Day 6-7: Bundle Features (16 hours)
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| Bundle Creation | 6 | High | • Implement bundle validation<br>• Create price calculation logic<br>• Build image upload handling<br>• Implement bundle saving<br>• Create bundle update logic<br>• Build bundle duplication<br>• Implement bundle versioning<br>• Create bundle error handling |
| Bundle Editing | 4 | High | • Create bundle edit form<br>• Implement price update logic<br>• Build image update handling<br>• Create product removal flow<br>• Implement bundle status update<br>• Build edit validation<br>• Create edit history tracking |
| Bundle Listing | 6 | High | • Implement bundle filtering<br>• Create sorting functionality<br>• Build search implementation<br>• Create pagination logic<br>• Implement bulk actions<br>• Build export functionality<br>• Create list view customization |

#### Day 8-9: Cart & Inventory (16 hours)
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| Cart Integration | 8 | High | • Implement cart API integration<br>• Create bundle add to cart<br>• Build cart validation<br>• Implement price calculations<br>• Create cart error handling<br>• Build cart update logic<br>• Implement cart recovery<br>• Create cart analytics tracking |
| Inventory Management | 4 | Medium | • Implement inventory checks<br>• Create stock level tracking<br>• Build inventory updates<br>• Implement low stock alerts<br>• Create inventory validation<br>• Build inventory sync logic |
| Testing & Bug Fixes | 4 | High | • Test authentication flow<br>• Verify bundle creation<br>• Test cart integration<br>• Validate inventory updates<br>• Test theme integration<br>• Fix critical bugs<br>• Verify error handling |

#### Day 10: Deployment & Polish (8 hours)
| Task | Hours | Priority | Implementation Details |
|------|-------|----------|----------------------|
| Fly.io Deployment | 4 | High | • Set up Fly.io account<br>• Configure deployment settings<br>• Create production database<br>• Set up SSL certificates<br>• Configure environment variables<br>• Implement deployment pipeline<br>• Set up monitoring<br>• Configure backups |
| Documentation | 2 | Medium | • Write installation guide<br>• Create user documentation<br>• Document API endpoints<br>• Write deployment guide<br>• Create troubleshooting guide<br>• Document known issues |
| Final Testing | 2 | High | • Test production deployment<br>• Verify all critical paths<br>• Test error scenarios<br>• Validate security measures<br>• Check performance metrics<br>• Verify data integrity |

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

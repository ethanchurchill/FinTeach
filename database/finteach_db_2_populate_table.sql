SET session_replication_role = 'replica'; -- ignore errors until script is done running.

-- -----------------
-- Records of module
-- -----------------
INSERT INTO module VALUES (1, 'Stocks', 6, 'This module discusses one of the most common asset classes, stocks. Stocks are a way for a company to raise funds and for investors to have ownership of a companies assets and profit.', '/assets/stocks-folder.png', NULL, NULL);
INSERT INTO module VALUES (2, 'Budgeting', 3, 'This module discusses how to properly budget. Budgeting is an import concept to learn since with a proper budget you have more control over where you money is going and how it is being managed.', '/assets/budgeting-folder.png', NULL, NULL);
INSERT INTO module VALUES (3, 'Credit', 5, 'This module discusses what is credit and why it is important. Credit is a useful financial tool which if used right can bring a lot of finaical success.', '/assets/credit-folder.png', NULL, NULL);


-- --------------------
-- Records of submodule
-- --------------------
-- Stocks module submodules
INSERT INTO submodule VALUES (1, 1, 'What are Stocks?', NULL, 'c', 1);
INSERT INTO submodule VALUES (2, 1, 'Where do stocks come from?', NULL, 'c', 2);
INSERT INTO submodule VALUES (3, 1, 'What does it mean for someone to hold stock?', NULL, 'c', 3);
INSERT INTO submodule VALUES (4, 1, 'Where to buy stocks?', NULL, 'c', 4);
INSERT INTO submodule VALUES (5, 1, 'Different types of stock and stock classes', NULL, 'c', 5);
INSERT INTO submodule VALUES (6, 1, 'Stocks Module Quiz', NULL, 'q', 6);

-- Budgeting module submodules
INSERT INTO submodule VALUES (7, 2, 'What is a budget?', NULL, 'c', 1);
INSERT INTO submodule VALUES (8, 2, 'How to start?', NULL, 'c', 2);
INSERT INTO submodule VALUES (9, 2, 'Example Budgeting plans and Budgeting Tips', NULL, 'c', 3);
INSERT INTO submodule VALUES (10, 2, 'Budget Module Quiz', NULL, 'q', 4);

-- Credit module submodules
INSERT INTO submodule VALUES (11, 3, 'What is credit?', NULL, 'c', 1);
INSERT INTO submodule VALUES (12, 3, 'Types of Credit', NULL, 'c', 2);
INSERT INTO submodule VALUES (13, 3, 'Why is credit important?', NULL, 'c', 3);
INSERT INTO submodule VALUES (14, 3, 'How to increase your credit?', NULL, 'c', 4);
INSERT INTO submodule VALUES (15, 3, 'Credit cards', NULL, 'c', 5);
INSERT INTO submodule VALUES (16, 3, 'Credit Module Quiz', NULL, 'q', 6);


-- ------------------------
-- Records of content_field
-- ------------------------
-- Stocks module content.
INSERT INTO content_field VALUES (1, 1, '', 'A stock is a security that represents a fraction of a company. It is also known as an equity and is denoated by a unit called "shares".', NULL, 1);
INSERT INTO content_field VALUES (2, 2, 'Why would a company sell its stock?', 'This is usually done to raise money to run the company''s operations. This is called "issuing stocks".', NULL, 1);
INSERT INTO content_field VALUES (3, 2, 'Issue more stock and stock buy-backs', 'A company can issue new shares at any time. This is not desirable because it dilutes the rights of the current shareholders. A company can also buy its own shares, called stock buy-back, which increases the value of the shares owned by the shareholders.', NULL, 2);
INSERT INTO content_field VALUES (4, 2, 'A company going public', 'The most common way a private company goes public is through an initial public offering (IPO). This is when the company first issues it''s stock to the general public.', NULL, 3);
INSERT INTO content_field VALUES (5, 3, '', 'An individual that holds stock of a company is called a “shareholder”. The individual has a claim to the company''s assets and earnings in proportion to the number of shares they own. It’s important to note that when an individual owns stock of a company, they don’t own the company. They own shares that were issued by the company. This is because legally a corporation is considered a “person” which means it owns its assets. For example, a warehouse owned by the corporation belongs to the corporation, not the stockholders.', NULL, 1);
INSERT INTO content_field VALUES (6, 3, 'As a shareholder, you have:', 'Voting rights in shareholder meetings, receive company dividends, capital appreciation and allowed to sell your shares to someone else.', NULL, 2);
INSERT INTO content_field VALUES (7, 3, 'Receive company dividends', 'Getting a share of the corporation’s profits. This is not guaranteed. Some companies choose to rather give dividends, to invest that money back into the company. That being stock buy-backs or investing into company operations or research.', NULL, 3);
INSERT INTO content_field VALUES (8, 3, 'Capital appreciation', 'As the companies stock value goes up the shares the shareholder holds go up. And vice-versa when the stock value goes down.', NULL, 4);
INSERT INTO content_field VALUES (9, 4, '', 'Most of the time, stocks are bought and sold on stock exchanges. Examples being the Nasdaq or the New York Stock Exchange. You can use a brokerage to buy and sell stock on an exchange. Then the exchange will list the order as a purchasing price (the bid) or the selling price (the offer). Thus, the value of the stock is determined in large part to supply and demand.', NULL, 1);
INSERT INTO content_field VALUES (10, 5, 'Different types of stock', 'Common stock - The most common type of stock, which allows the shareholder to vote during company annual meetings and collect dividends. However, shareholders of common stock are last after debt-holders, creditors, and preferred stock shareholders to receive reimbursement if the company goes bankrupt and is forced to liquidate (sell) its assets.Preferred stock - Usually don’t give the shareholder the right to vote nevertheless, usually preferred stockholders receive dividends before common stockholders.', NULL, 1);
INSERT INTO content_field VALUES (11, 5, 'Stock Classes', 'Some companies may issue different classes of stock. The most common classes are class A, B, and C, which give the shareholder different voting rights.', NULL, 2);

-- Budget module content.
INSERT INTO content_field VALUES (12, 7, '', 'A budget is a plan for how to spend money, which shows how much money is mad and how will it be spent. Usually a buget is made for a month by month basis. The main goal is to save money.', NULL, 1);
INSERT INTO content_field VALUES (13, 8, '', 'Calculate income for the month. Subtract any expenses - stuff spend money on. Examples being Bills, gorceries, shopping, etc. You want to make sure your expenses are less then your income.', NULL, 1);
INSERT INTO content_field VALUES (14, 9, 'Example Budgeting plans', '50/30/20 rule: 50% of your income for needs (Groceries, Housing, Transportation); 30% of your income for wants; 20% of your income for savings or debt repayment.', NULL, 1);
INSERT INTO content_field VALUES (15, 9, 'Budgeting Tips', 'Keep track of your expenses using a spreadsheet. Examples: Eg. Mint lifestyle, Google Drive budget spreadsheets, NerdWallet budget, etc.', NULL, 2);

-- Credit module content.
INSERT INTO content_field VALUES (16, 11, '', 'According to Oxford dictionary, Credit is: “The ability of a customer to obtain goods or services before payment, based on the trust that payment will be made in the future.”', NULL, 1);
INSERT INTO content_field VALUES (17, 11, '', 'To the extent that creditors consider you worthy of their trust, you are said to be creditworthy, or to have "good credit."', NULL, 2);
INSERT INTO content_field VALUES (18, 11, 'How as credit done in the past? How is it done now?', 'In centuries past, creditors might have gauged your creditworthiness by reputation alone. Obviously, this method was subjective and prone to error, manipulation and bias. These days, creditors prefer a more objective approach. In the U.S., typically they look at your credit history—your record of borrowing and repaying funds—as a first step in determining whether to issue you credit.', NULL, 3);
INSERT INTO content_field VALUES (19, 11, 'Information in the credit report', 'The number of credit card accounts owned, their borrowing limits and current outstanding balance. Amount of loans taken out, how much paid back. Punctuality of monthly payments. Severe financial setbacks such as mortgage foreclosures, car repossession, bankruptcies.', NULL, 4);
INSERT INTO content_field VALUES (20, 11, 'Credit score', 'Creditors use a credit score as the first step to decide whether or not to issue credit. A credit score is a three digit number that portrays the information on the credit in an easy to interpret manner and in a fair unbiased way.', NULL, 5);
INSERT INTO content_field VALUES (21, 12, 'Revolving Credit', 'You can repeatably burrow money from a credit account up to a limit. You can pay it back over time.', NULL, 1);
INSERT INTO content_field VALUES (22, 12, 'Charge Cards', 'Required to be payed off in full every month.', NULL, 2);
INSERT INTO content_field VALUES (23, 12, 'Installment Credit', 'A loan that you pay off over a fixed period of time.', NULL, 3);
INSERT INTO content_field VALUES (24, 13, '', 'Good credit is needed if you plan to borrow money for larger purchases, such as a car or house. Credit cards offer a convenient way to pay, as well as purchase-protection, more on this later. A higher credit score can lead to better interest and terms on loans and credit cards. As well as better credit card rewards depending on the company. Including lenders, there are many other organizations that will use your credit score. For example, landlords use credit scores to decide to rent an apartment to a certain person and insurance companies use credit scores to determine rates.', NULL, 1);
INSERT INTO content_field VALUES (25, 14, 'Using a credit card', 'Repaying your debts on time shows on your credit score. However, getting a credit card requires good credit history, more on this in credit card section.', NULL, 2);
INSERT INTO content_field VALUES (26, 14, 'Without a credit card', 'Pay off all existing loans on a timely manner. Lenders look if your loan balances are trending towards zero.', NULL, 3);
INSERT INTO content_field VALUES (27, 14, '', 'Installment loans: Loans that are paid back through monthly payments, such as student loans, mortgage, auto. Paying back these loans on time will improve your credit score.', NULL, 4);
INSERT INTO content_field VALUES (28, 14, '', 'Non-profit lending circles: Group of people that lend to each other to increase their credit', NULL, 5);
INSERT INTO content_field VALUES (29, 14, '', 'Add monthly bills, just as phone bill and utility bills to credit report.', NULL, 6);
INSERT INTO content_field VALUES (30, 15, '', 'Allows cardholders to borrow funds with which to purchase goods. Purchase-protection: benefit that allows consumers to file a claim with their issuer to receive replacement, repair or reimbursement for any eligible stolen or damaged items.', NULL, 1);


-- ---------------
-- Records of quiz
-- ---------------
INSERT INTO quiz VALUES (1, 6, 'What is the name of the unit stocks are denoted in?', 2, NULL);
INSERT INTO quiz VALUES (2, 6, 'Why would a company issue more stock?', 8, NULL);
INSERT INTO quiz VALUES (3, 6, 'Which of the following is a reason a company might not provide a dividends?', 9, NULL);
INSERT INTO quiz VALUES (4, 10, 'Which of the following is not included on a budget?', 16, NULL);
INSERT INTO quiz VALUES (5, 10, 'What is the recommended time frame to budget for?', 18, NULL);
INSERT INTO quiz VALUES (6, 10, 'How are the three expenditure categories divided under the 50/30/20 rule?', 21, NULL);
INSERT INTO quiz VALUES (7, 16, 'Which of the following is not found in a credit report?', 28, NULL);
INSERT INTO quiz VALUES (8, 16, 'Which of the following is not a type of credit?', 31, NULL);
INSERT INTO quiz VALUES (9, 16, 'What is purchase protection?', 33, NULL);


-- -----------------------
-- Records of quiz_options
-- -----------------------
INSERT INTO quiz_options VALUES (1, 1, 'Securities', 1);
INSERT INTO quiz_options VALUES (2, 1, 'Shares', 2);
INSERT INTO quiz_options VALUES (3, 1, 'Dividends', 3);
INSERT INTO quiz_options VALUES (4, 1, 'Stock', 4);
INSERT INTO quiz_options VALUES (5, 2, 'A company can''t issue more shares post IPO.', 1);
INSERT INTO quiz_options VALUES (6, 2, 'There is no good reason to issue more stock.', 2);
INSERT INTO quiz_options VALUES (7, 2, 'To dilute stock price.', 3);
INSERT INTO quiz_options VALUES (8, 2, 'Inorder to raise more funds.', 4);
INSERT INTO quiz_options VALUES (9, 3, 'Rather giving a dividends and company might want to reinvest its profits back into the buisness.', 1);
INSERT INTO quiz_options VALUES (10, 3, 'The company is greedy.', 2);
INSERT INTO quiz_options VALUES (11, 3, 'The investor isn''t interested in receiving a dividends.', 3);
INSERT INTO quiz_options VALUES (12, 3, 'Dividends make the stock less desirable for an investor.', 4);
INSERT INTO quiz_options VALUES (13, 4, 'Income', 1);
INSERT INTO quiz_options VALUES (14, 4, 'Bills', 2);
INSERT INTO quiz_options VALUES (15, 4, 'Shopping', 3);
INSERT INTO quiz_options VALUES (16, 4, 'None of the above', 4);
INSERT INTO quiz_options VALUES (17, 5, 'A week', 1);
INSERT INTO quiz_options VALUES (18, 5, 'A month', 2);
INSERT INTO quiz_options VALUES (19, 5, 'A quarter', 3);
INSERT INTO quiz_options VALUES (20, 5, 'A year', 4);
INSERT INTO quiz_options VALUES (21, 6, '50% needs, 30% wants, 20% savings.', 1);
INSERT INTO quiz_options VALUES (22, 6, '50% savings, 30% needs, 20% wants.', 2);
INSERT INTO quiz_options VALUES (23, 6, '50% needs, 30% savings, 20% wants.', 3);
INSERT INTO quiz_options VALUES (24, 6, '50% wants, 30% needs, 20% savings.', 4);
INSERT INTO quiz_options VALUES (25, 7, 'Monthly payments', 1);
INSERT INTO quiz_options VALUES (26, 7, 'Amount of outstanding loans', 2);
INSERT INTO quiz_options VALUES (27, 7, 'Credit card information', 3);
INSERT INTO quiz_options VALUES (28, 7, 'Criminal record', 4);
INSERT INTO quiz_options VALUES (29, 8, 'Revolving Credit', 1);
INSERT INTO quiz_options VALUES (30, 8, 'Service Credit', 2);
INSERT INTO quiz_options VALUES (31, 8, 'Investment Credit', 3);
INSERT INTO quiz_options VALUES (32, 8, 'Installment Credit', 4);
INSERT INTO quiz_options VALUES (33, 9, 'Ability to be refunded for lost, damaged, or stolen items.', 1);
INSERT INTO quiz_options VALUES (34, 9, 'Legal protection from credit card fraud.', 2);
INSERT INTO quiz_options VALUES (35, 9, 'A guarantee that your payment will be processed.', 3);
INSERT INTO quiz_options VALUES (36, 9, 'A security deposit made when getting a credit card.', 4);

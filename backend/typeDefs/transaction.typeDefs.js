const transactionTypeDef = `#graphql 
type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
}

type Query {
    transactions: [Transaction!]
    transaction(transaction:ID!): Transaction
}

type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction
    updateTransaction(input: UpdateTransaction!): Transaction
    deleteTransaction(transactionId:ID!): Transaction

}

input CreateTransactionInput {
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
    

}

input UpdateTransaction {
    transactionId: ID!
    description: String
    paymentType: String
    category: String
    amount: Float
    location: String
    date: String
}
`
export default transactionTypeDef
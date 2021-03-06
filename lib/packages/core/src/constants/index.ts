import {TransactionType} from './transactionType';
import {TransactionArbitrarySubtype} from './transactionArbitrarySubtype';
import {TransactionAssetSubtype} from './transactionAssetSubtype';
import {TransactionLeasingSubtype} from './transactionLeasingSubtype';
import {TransactionMarketplaceSubtype} from './transactionMarketplaceSubtype';
import {TransactionPaymentSubtype} from './transactionPaymentSubtype';
import {TransactionRewardRecipientSubtype} from './transactionRewardRecipientSubtype';
import {TransactionEscrowSubtype} from './transactionEscrowSubtype';
import {TransactionSmartContractSubtype} from './transactionSmartContractSubtype';

/**
 * The default deadline (in minutes) for Transactions
 * @module core
 */
const DefaultDeadline = 1440;

/**
 * The default endpoint for [[ApiSettings]]
 * @module core
 */
const DefaultApiEndpoint = '/burst';

export {
    DefaultDeadline,
    DefaultApiEndpoint,
    TransactionType,
    TransactionPaymentSubtype,
    TransactionMarketplaceSubtype,
    TransactionLeasingSubtype,
    TransactionAssetSubtype,
    TransactionArbitrarySubtype,
    TransactionRewardRecipientSubtype,
    TransactionEscrowSubtype,
    TransactionSmartContractSubtype
};

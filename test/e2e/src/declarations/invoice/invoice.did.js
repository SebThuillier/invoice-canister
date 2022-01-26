export const idlFactory = ({ IDL }) => {
  const AccountIdentifier__1 = IDL.Variant({
    'principal' : IDL.Principal,
    'blob' : IDL.Vec(IDL.Nat8),
    'text' : IDL.Text,
  });
  const Token = IDL.Record({ 'symbol' : IDL.Text });
  const Details = IDL.Record({
    'meta' : IDL.Vec(IDL.Nat8),
    'description' : IDL.Text,
  });
  const CreateInvoiceArgs = IDL.Record({
    'token' : Token,
    'details' : IDL.Opt(Details),
    'amount' : IDL.Nat,
  });
  const AccountIdentifier = IDL.Variant({
    'principal' : IDL.Principal,
    'blob' : IDL.Vec(IDL.Nat8),
    'text' : IDL.Text,
  });
  const TokenVerbose = IDL.Record({
    'decimals' : IDL.Int,
    'meta' : IDL.Opt(IDL.Record({ 'Issuer' : IDL.Text })),
    'symbol' : IDL.Text,
  });
  const Time = IDL.Int;
  const Invoice = IDL.Record({
    'id' : IDL.Nat,
    'creator' : IDL.Principal,
    'destination' : AccountIdentifier,
    'token' : TokenVerbose,
    'refundedAtTime' : IDL.Opt(Time),
    'paid' : IDL.Bool,
    'refunded' : IDL.Bool,
    'verifiedAtTime' : IDL.Opt(Time),
    'amountPaid' : IDL.Nat,
    'expiration' : Time,
    'refundAccount' : IDL.Opt(AccountIdentifier),
    'details' : IDL.Opt(Details),
    'amount' : IDL.Nat,
  });
  const CreateInvoiceSuccess = IDL.Record({ 'invoice' : Invoice });
  const CreateInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'InvalidDetails' : IDL.Null,
      'InvalidAmount' : IDL.Null,
      'InvalidDestination' : IDL.Null,
      'InvalidToken' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const CreateInvoiceResult = IDL.Variant({
    'Ok' : CreateInvoiceSuccess,
    'Err' : CreateInvoiceErr,
  });
  const GetBalanceArgs = IDL.Record({ 'token' : Token });
  const GetBalanceSuccess = IDL.Record({ 'balance' : IDL.Nat });
  const GetBalanceErr = IDL.Record({
    'kind' : IDL.Variant({ 'NotFound' : IDL.Null, 'InvalidToken' : IDL.Null }),
    'message' : IDL.Opt(IDL.Text),
  });
  const GetBalanceResult = IDL.Variant({
    'Ok' : GetBalanceSuccess,
    'Err' : GetBalanceErr,
  });
  const GetCallerIdentifierArgs = IDL.Record({ 'token' : Token });
  const GetCallerIdentifierSuccess = IDL.Record({
    'accountIdentifier' : AccountIdentifier,
  });
  const GetCallerIdentifierErr = IDL.Record({
    'kind' : IDL.Variant({ 'InvalidToken' : IDL.Null }),
    'message' : IDL.Opt(IDL.Text),
  });
  const GetCallerIdentifierResult = IDL.Variant({
    'Ok' : GetCallerIdentifierSuccess,
    'Err' : GetCallerIdentifierErr,
  });
  const GetInvoiceArgs = IDL.Record({ 'id' : IDL.Nat });
  const GetInvoiceSuccess = IDL.Record({ 'invoice' : Invoice });
  const GetInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'NotFound' : IDL.Null,
      'InvalidInvoiceId' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const GetInvoiceResult = IDL.Variant({
    'Ok' : GetInvoiceSuccess,
    'Err' : GetInvoiceErr,
  });
  const RefundInvoiceArgs = IDL.Record({
    'id' : IDL.Nat,
    'refundAccount' : AccountIdentifier,
    'amount' : IDL.Nat,
  });
  const RefundInvoiceSuccess = IDL.Record({ 'blockHeight' : IDL.Nat64 });
  const RefundInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'TransferError' : IDL.Null,
      'NotFound' : IDL.Null,
      'InvalidToken' : IDL.Null,
      'InvalidInvoiceId' : IDL.Null,
      'AlreadyRefunded' : IDL.Null,
      'NotYetPaid' : IDL.Null,
      'NoRefundDestination' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const RefundInvoiceResult = IDL.Variant({
    'Ok' : RefundInvoiceSuccess,
    'Err' : RefundInvoiceErr,
  });
  const TransferArgs = IDL.Record({
    'destination' : AccountIdentifier,
    'token' : Token,
    'amount' : IDL.Nat,
  });
  const TransferSuccess = IDL.Record({ 'blockHeight' : IDL.Nat64 });
  const TransferError = IDL.Record({
    'kind' : IDL.Variant({
      'BadFee' : IDL.Null,
      'InvalidToken' : IDL.Null,
      'Other' : IDL.Null,
      'InsufficientFunds' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const TransferResult = IDL.Variant({
    'Ok' : TransferSuccess,
    'Err' : TransferError,
  });
  const VerifyInvoiceArgs = IDL.Record({ 'id' : IDL.Nat });
  const VerifyInvoiceSuccess = IDL.Variant({
    'Paid' : IDL.Record({ 'invoice' : Invoice }),
    'AlreadyVerified' : IDL.Record({ 'invoice' : Invoice }),
  });
  const VerifyInvoiceErr = IDL.Record({
    'kind' : IDL.Variant({
      'TransferError' : IDL.Null,
      'NotFound' : IDL.Null,
      'InvalidToken' : IDL.Null,
      'InvalidInvoiceId' : IDL.Null,
      'NotYetPaid' : IDL.Null,
      'Expired' : IDL.Null,
    }),
    'message' : IDL.Opt(IDL.Text),
  });
  const VerifyInvoiceResult = IDL.Variant({
    'Ok' : VerifyInvoiceSuccess,
    'Err' : VerifyInvoiceErr,
  });
  return IDL.Service({
    'accountIdentifierToBlob' : IDL.Func(
        [AccountIdentifier__1],
        [IDL.Vec(IDL.Nat8)],
        ['query'],
      ),
    'create_invoice' : IDL.Func([CreateInvoiceArgs], [CreateInvoiceResult], []),
    'get_balance' : IDL.Func([GetBalanceArgs], [GetBalanceResult], []),
    'get_caller_identifier' : IDL.Func(
        [GetCallerIdentifierArgs],
        [GetCallerIdentifierResult],
        ['query'],
      ),
    'get_invoice' : IDL.Func([GetInvoiceArgs], [GetInvoiceResult], []),
    'refund_invoice' : IDL.Func([RefundInvoiceArgs], [RefundInvoiceResult], []),
    'remaining_cycles' : IDL.Func([], [IDL.Nat], ['query']),
    'transfer' : IDL.Func([TransferArgs], [TransferResult], []),
    'verify_invoice' : IDL.Func([VerifyInvoiceArgs], [VerifyInvoiceResult], []),
  });
};
export const init = ({ IDL }) => { return []; };
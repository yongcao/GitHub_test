function Mscrm_Isv_sl_payment_Form_Group0_Control0_1(){
    if (crmForm.ObjectId == null) {
        alert('Payment must be created before a refund can occur.');
    }
    else if (crmForm.IsDirty) {
        alert('Save changes before refunding payment');
    }
    else if (crmForm.statuscode.SelectedText != 'Posted') {
        alert('Payment must be posted before creating a refund');
    }
    else if (crmForm.sl_reversalpaymentid.DataValue != null) {
        alert('Payment has been reversed.  Cannot perform refund.');
    }
    else if (crmForm.sl_refundedpaymentid.DataValue != null) {
        alert('Payment has already been refunded.');
    }
    else {
        if (crmForm.ObjectId != null) {
            window.showModalDialog(sl_.HostURL + ORG_UNIQUE_NAME + '/Adjustment/RefundPayment/' + crmForm.ObjectId, null, 'dialogHeight:300px; dialogWidth:500px', 'status=0');
            window.location.reload();

        }
    }
}


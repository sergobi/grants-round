import { BaseModal } from "./BaseModal";
import Button, { ButtonVariants } from "./Button";

function SwitchNetworkModal({
  networkName,
  onSwitchNetwork,
}: {
  networkName: string;
  onSwitchNetwork: () => void;
}) {
  return (
    <BaseModal isOpen onClose={() => {}} hideCloseButton>
      <>
        <div data-testid="switch-networks-modal" className="flex">
          <div className="text-center">
            <div data-testid="switch-networks-modal-title">
              <p className="text-primary-text text-[18px] flex justify-center p-2">
                Switch Networks to Continue
              </p>
              <p className="text-gitcoin-grey-400 text-[16px] flex justify-center p-2">
                To apply for this round on {networkName}, you need to switch the
                network on your wallet.
              </p>
            </div>
          </div>
        </div>
        <div
          data-testid="switch-networks-modal-button"
          className="w-full justify-center text-center grid grid-cols-1"
        >
          <Button
            styles={["p-3", "justify-center"]}
            onClick={onSwitchNetwork}
            variant={ButtonVariants.primary}
          >
            Switch Networks to Continue
          </Button>
        </div>
      </>
    </BaseModal>
  );
}

export default SwitchNetworkModal;

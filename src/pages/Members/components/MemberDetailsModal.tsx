import { Modal, ModalTitle } from 'components';
import { MemberType } from 'types';

const MemberImageModal: React.FC<{
  member: MemberType;
  onClose: () => void;
}> = (props) => {
  const { member } = props;

  return (
    <Modal onClose={props.onClose}>
      <ModalTitle title={`${member.name} - ${member.instrument}`} />
      <div className='flex items-center flex-col w-full overflow-y-auto'>
        <div
          className='my-6 relative w-32 h-32 flex justify-center items-center shrink-0 border border-white rounded-full shadow-primary overflow-hidden'
          style={{ backgroundColor: member.color }}
        >
          <img src={member.avatarUrl} alt='avatar' className='max-h-28' />
        </div>
        <p className='font-nino-mtavruli'>
          ორბიტალური დაშორება:{' '}
          <span className='pb-1 font-nino-mtavruli-bold'>
            {member.orbitWidth}
          </span>
        </p>
        <p className='pt-6 max-w-lg font-bpg-arial text-lg text-justify'>
          {member.biography}
        </p>
      </div>
    </Modal>
  );
};

export default MemberImageModal;

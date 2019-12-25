import React from 'react';

const KindOneButton = ({ kind, onKindChange }) => {
  return (
    <button value={kind} onClick={onKindChange}>
      {kind}
    </button>
  );
};

const KindOneButtonAll = ({ onKindChange }) => {
  return (
    <button value={''} onClick={onKindChange}>
      ALL
    </button>
  );
};

const KindButtons = ({ products, onKindChange }) => {
  const kindKind = products.map(p => p.kind);
  const uniqKindKind = [...new Set(kindKind)];
  return (
    <div>
      {uniqKindKind.map(kind => (
        <KindOneButton kind={kind} onKindChange={onKindChange} />
      ))}
      <KindOneButtonAll onKindChange={onKindChange} />
    </div>
  );
};

export default KindButtons;

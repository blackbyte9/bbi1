import { readTests } from '@/lib/test/read';
import { Suspense } from 'react';
import Tests from './table';

export default function AllTestsTable() {
  const tests = readTests();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <Tests tests={tests} />
    </Suspense>
  );
}

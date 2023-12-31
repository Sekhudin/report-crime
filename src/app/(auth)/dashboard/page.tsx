"use client"
import { PlainCard } from 'src/component/molecules/special/plain-card';
import { ScrollArea } from 'src/component/ui/scroll-area';
import { CardListArticleInfiniteAuthor } from 'src/component/organisms/cardlist/article/infinite-author';
import { ArticleProvider } from 'src/component/context/provider';
import { useAuth, useCase, UserRole } from 'src/component/context/use-ctx';
import { cn } from 'src/util';

const Roles = ({ roles, className }: { roles: UserRole[], className?: string }) => (
  <div className={cn(`flex items-center gap-x-2 `, className)}>
    {roles.map((v, key) => (
      <div key={key} className='text-xs text-white font-light capitalize'>
        {v === 'super admin' && (<p className='bg-pink-500 px-1 py-0.5 rounded-md'>{v}</p>)}
        {v === 'admin' && (<p className='bg-cyan-800 px-1 py-0.5 rounded-md'>{v}</p>)}
      </div>
    ))}
  </div>)

const ReportCount = ({ list, text, className }: { list: unknown[], text: string, className?: string }) => (
  <div className={cn(`flex flex-wrap flex-col lg:flex-row justify-center items-center space-x-2`, className)}>
    <p className='font-semibold'>{list.length}</p>

    <div className='flex space-x-1 font-light capitalize'>
      <p className='hidden lg:flex'>Laporan</p>
      <p>{text}</p>
    </div>
  </div>)

export default function Page() {
  const { user } = useAuth();
  const { incoming, process, finish } = useCase();

  return (
    <ArticleProvider>
      <div className='h-full rounded-lg overflow-hidden flex flex-col'>
        <section className='bg-gray-100'>
          <PlainCard>
            <div className='flex flex-wrap justify-between items-center'>
              {user && (<>
                <p className='text-lg lg:text-xl font-medium capitalize'>{user.name}</p>
                <Roles roles={Object.values(user.role)} />
              </>)}
            </div>
          </PlainCard>
          <div className='h-2 lg:h-4 w-full' />
        </section>

        <section className="flex flex-wrap gap-2 lg:gap-4">
          <PlainCard className="grow py-2 lg:py-4">
            <ReportCount
              className=''
              text='masuk'
              list={incoming} />
          </PlainCard>

          <PlainCard className="grow py-2 lg:py-4">
            <ReportCount
              className=''
              text='diproses'
              list={process} />
          </PlainCard>

          <PlainCard className="grow py-2 lg:py-4">
            <ReportCount
              className='max-h-full'
              text='selesai'
              list={finish} />
          </PlainCard>
        </section>

        <ScrollArea className='rounded-lg mt-2 lg:mt-4 shadow-none p-4'>
          <div className='sticky top-0 z-10 bg-gray-100 pb-3 lg:pb-6'>
            <p className='text-lg lg:text-2xl font-medium lg:text-center'>
              Artikel Anda
            </p>
          </div>
          {user && (
            <CardListArticleInfiniteAuthor
              nItem={10}
              authorId={user.id} />)}
        </ScrollArea>
      </div>
    </ArticleProvider>
  )
}
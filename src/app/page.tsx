import Link from "next/link";
export default function Home() {
  return (
    <>
      <section>
        <ul>
          <li>
            <Link href="/task-one">Task One</Link>
          </li>

          <li>
            <Link href="/task-two">Task Two</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

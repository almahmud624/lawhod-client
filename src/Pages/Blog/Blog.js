import React from "react";
import { Code } from "react-feather";
import useDynamicTitle from "../../Hook/useDynamicTitle";

const Blog = () => {
  // title show dynamically
  useDynamicTitle("Blog");
  return (
    <div>
      <section className="bg-gray-900">
        <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-medium text-white capitalize leading-snug">
              Some Important <br /> QNA <br></br> You should Know
            </h2>
            <hr className="bg-white/40 border-[#4e362846]" />
          </div>

          <div className="border-white/40 relative border-2 px-4 pt-14 pb-8">
            <div className="absolute -top-5 pb-2 -left-9 bg-gray-900 px-4 text-white">
              <Code size={40} className="text-white/40" />
            </div>
            <p className="mb-3 font-medium uppercase text-white">
              Difference between SQL and NoSQL?
            </p>
            <p className="text-blue-200">
              SQL databases are relational, NoSQL databases are
              non-relational.SQL databases use structured query language and
              have a predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.SQL databases are vertically scalable, while
              NoSQL databases are horizontally scalable.SQL databases are
              table-based, while NoSQL databases are document, key-value, graph,
              or wide-column stores.SQL databases are better for multi-row
              transactions, while NoSQL is better for unstructured data like
              documents or JSON.
            </p>
          </div>
          <div className="border-white/40 relative border-2 px-4 pt-14 pb-8">
            <div className="absolute -top-5 pb-2 -left-9 bg-gray-900 px-4 text-white">
              <Code size={40} className="text-white/40" />
            </div>
            <p className="mb-3 font-medium uppercase text-white">
              What is JWT, and how does it work?
            </p>
            <p className="text-blue-200">
              JWTs or JSON Web Tokens are most commonly used to identify an
              authenticated user. They are issued by an authentication server
              and are consumed by the client-server (to secure its APIs).If the
              auth server sends it as a plain JSON, the client application???s
              APIs would have no way to verify that the content they are
              receiving is correct. A malicious attacker could, for example,
              change the user ID (sub claim in the above example JSON), and the
              application???s APIs would have no way to know that that has
              happened.
            </p>
          </div>

          <div className="border-white/40 relative border-2 px-4 pt-14 pb-8">
            <div className="absolute -top-5 pb-2 -left-9 bg-gray-900 px-4 text-white">
              <Code size={40} className="text-white/40" />
            </div>
            <p className="mb-3 font-medium uppercase text-white">
              What is the difference between javascript and NodeJS?
            </p>
            <p className="text-blue-200">
              JavaScript is a simple programming language that runs in any
              browser JavaScript Engine. Whereas Node JS is an interpreter or
              running environment for a JavaScript programming language that
              holds many excesses, it requires libraries that can easily be
              accessed from JavaScript programming for better use.
            </p>
          </div>
          <div className="border-white/40 relative border-2 px-4 pt-14 pb-8">
            <div className="absolute -top-5 pb-2 -left-9 bg-gray-900 px-4 text-white">
              <Code size={40} className="text-white/40" />
            </div>
            <p className="mb-3 font-medium uppercase text-white">
              How does NodeJS handle multiple requests at the same time?
            </p>
            <p className="text-blue-200">
              When a new request comes in, NodeJS checks if it requires any
              blocking IO operations, if not, the EventLoop processes it and
              sends the response back to the client directly. If yes, then the
              request is forwarded to the thread manager, which then based on an
              algorithm, picks up an idle thread from the pool and lets it
              process the request. After completion of the request processing
              operation, the thread, returns the response back to the EventLoop
              which is then forwarded to the client.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

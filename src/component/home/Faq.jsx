const Faq = () => {
  return (
    <div className="w-full md:w-[85%] lg:w-[85%] m-auto text-white">
      <h1 className="text-[20px] lg:text-[54px] text-white text-center ">
        WANT TO KNOW
      </h1>
      <div className="w-[95%] md:w-[60%] lg:w-[60%] m-auto text-white">
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          nulla fuga atque omnis corrupti! Fuga officiis iusto dicta,
          voluptatibus rem itaque. Eius deleniti similique quibusdam officiis.
          Voluptates optio earum ducimus?
        </p>
      </div>
      <div className="join join-vertical  w-full">
        <div className="collapse collapse-arrow join-item border mt-5">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Lorem, ipsum dolor sit amet
          </div>
          <div className="collapse-content">
            <p>
              consectetur adipisicing elit. Architecto autem repellat quod ipsa
              doloremque expedita odit temporibus iste tempora sint et odio sit
              deserunt quaerat enim doloribus ex, accusantium fugiat? Aliquam,
              consectetur est architecto hic qui ex ducimus culpa illum,
              necessitatibus reiciendis recusandae, sunt facere nesciunt cum
              iusto! Numquam, nisi!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border mt-5">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Lorem ipsum dolor sit
          </div>
          <div className="collapse-content">
            <p>
              amet consectetur adipisicing elit. Voluptatibus harum labore vero
              quo maiores dignissimos, laboriosam repellat nobis accusantium
              eius provident enim laborum quisquam quidem quibusdam impedit unde
              a? Quas iste nobis commodi. Odit, autem.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border mt-5">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Lorem ipsum</div>
          <div className="collapse-content">
            <p>
              dolor sit amet consectetur adipisicing elit. Expedita, recusandae.
              Architecto ut repudiandae quis, dolores voluptatum ex temporibus
              nobis accusamus sed?
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border mt-5">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Lorem ipsum</div>
          <div className="collapse-content">
            <p>
              dolor sit amet consectetur adipisicing elit. Expedita, recusandae.
              Architecto ut repudiandae quis, dolores voluptatum ex temporibus
              nobis accusamus sed?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

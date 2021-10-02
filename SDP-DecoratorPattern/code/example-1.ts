abstract class AbstractTicket {
  abstract printTicket(): void;
}

class Ticket extends AbstractTicket {
  printTicket() {
    console.log(`
    ===========================================================
    ||                                                       ||
    ||                        Ticket                         ||
    ||                                                       ||
    ===========================================================
    `)
  }
}

abstract class TicketDecorator extends AbstractTicket {
  private ticket: AbstractTicket;
  constructor(ticket: AbstractTicket) {
    super();
    this.ticket = ticket;
  }
  public decorateTicket() {
    if(this.ticket !== null) {
      this.ticket.printTicket();
    }
  }
}

class Header extends TicketDecorator {
  constructor(ticket: AbstractTicket) {
    super(ticket);
  }
  printTicket() {
    console.log(`
    ===========================================================
    ||                        Header                         ||
    ===========================================================
    `)
    super.decorateTicket();
  }
}

class Title extends TicketDecorator {
  constructor(ticket: AbstractTicket) {
    super(ticket);
  }
  printTicket() {
    console.log(`
    ===========================================================
    ||                         Title                         ||
    ===========================================================
    `)
    super.decorateTicket();
  }
}

class Footer extends TicketDecorator {
  constructor(ticket: AbstractTicket) {
    super(ticket);
  }
  printTicket() {
    super.decorateTicket();
    console.log(`
    ===========================================================
    ||                        Footer                         ||
    ===========================================================
    `)
  }
}

let ticket = new Ticket();
ticket = new Header(ticket);
ticket = new Title(ticket);
ticket = new Footer(ticket);
ticket.printTicket();